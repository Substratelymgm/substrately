import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import Star from '../../assets/star-logo.svg';
import { AiOutlineSend, AiOutlineGlobal, AiOutlineDown } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('Eng');
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState<boolean>(false);

    const handleSend = async () => {
        if (input.trim()) {
            const newMessage: Message = { text: input, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');
            await getAiResponse(input);
        }
    };

    const getAiResponse = async (userMessage: string) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4',  // or 'gpt-3.5-turbo'
                    messages: [{ role: 'user', content: userMessage }],
                },
                {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const aiMessage = response.data.choices[0].message.content;
            const newAiMessage: Message = { text: aiMessage, sender: 'ai' };
            setMessages((prevMessages) => [...prevMessages, newAiMessage]);
        } catch (error) {
            console.error('Error getting AI response:', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setLanguageDropdownOpen(false);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen((prev) => !prev);
    };

    const languages = ['Eng', 'Span', 'Fre', 'Ger', 'Chi'];

    return (
        <div className='bg-white rounded-lg overflow-hidden text-black lg:fixed mx-auto right-[7rem] bottom-[6rem] w-full max-w-[500px] h-[500px] rounded-md flex flex-col'>
            {/* Navbar */}
            <div className='bg-black flex items-center flex-wrap justify-between p-4 sticky top-0 text-center font-semibold'>
                <div className='flex text-[1.6rem] items-center justify-center gap-[.1rem]'>
                    <div className='flex items-center justify-center gap-[.2rem]'>
                        <span className='text-white font-[700] '>Substrately</span>
                        <img src={Star} alt="" />
                    </div>
                    <div className='text-white font-[400]'>
                       <span className='hidden sm:flex'>
                       AI Chatbox
                       </span>
                       <span className='sm:hidden'>
                        AIc
                       </span>
                    </div>
                </div>

                <div className='relative'>
                    <div className='flex px-[.3rem] rounded-md bg-white gap-[.5rem] items-center cursor-pointer text-white' onClick={toggleLanguageDropdown}>
                        <div className='flex items-center gap-[.3rem]'>
                            <span className=' font-[400] text-black'>{selectedLanguage}</span>
                            <AiOutlineGlobal className='text-black' />
                        </div>
                        <AiOutlineDown className='ml-1 text-black' />
                    </div>
                    {languageDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg'>
                            {languages.map((language) => (
                                <div
                                    key={language}
                                    onClick={() => handleLanguageChange(language)}
                                    className='px-4 py-2 font-[400] cursor-pointer hover:bg-gray-100'
                                >
                                    {language}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Chat Messages Area */}
            <div className='flex-1 overflow-y-auto p-4'>
                {messages.length === 0 ? (
                    <p className='text-center text-gray-600'>No messages yet.</p>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`p-2 my-2 rounded-md ${message.sender === 'user' ? 'bg-blue-300 self-end' : 'bg-gray-300 self-start'}`}
                        >
                            {message.text}
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div className='border-t p-4 flex items-center gap-[1rem]'>
                <input
                    type='text'
                    placeholder='Type a message...'
                    value={input}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    className='flex-1 p-2 border w-full rounded-l-md focus:outline-none'
                />
                <div className='flex items-center gap-[.5rem]'>
                <button
                        
                        className='text-black hover:bg-gray-200 w-[2.5rem] h-[2.5rem] flex items-center justify-center duration-300 cursor-pointer p-2 rounded-full'
                    >
                        <BsPlus />
                    </button>
                    <button
                        onClick={handleSend}
                        className=' text-black hover:bg-gray-200 w-[2.5rem] h-[2.5rem] flex items-center justify-center duration-300 cursor-pointer p-2 rounded-full'
                    >
                        <AiOutlineSend />
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default ChatBox;