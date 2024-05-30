import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { logout } from '../../app/store/auth/thunk';
import { useAppDispatch } from '../../app/hooks';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {

    let mode: "payment" | "setup" | "subscription" | undefined = 'payment';
    
    const dispatch = useAppDispatch()


    const options = {
        mode: mode,
        amount: 1099,
        currency: 'usd',
        appearance: {},
    };

    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <div className='w-full min-h-full '>
             <div className="w-full flex items-center justify0center gap-[2rem] h-[4rem]">
                 <span></span>
                 <span onClick={handleLogout} className='cursor-pointer hover:underline'>Logout</span>
             </div>
            <div className=" sm:px-[2rem] md:px-[8rem] py-[2rem] w-full  ">
                <div className="w-full bg-white mx-auto sm:rounded-[24px] max-w-[757px] xl:relative p-[1rem] sm:p-[3rem] ">

                    <div className='flex flex-col items-center mt-[1rem] gap-[1rem]' >
                         <div className='flex items-center gap-[1rem]'>
                         <span>You have to pay to make use of service</span>
                         <span className='flex items-center justify-center'>
                            $90
                         </span>
                         </div>
                        <div className='mb-[1rem] w-full'>

                                    <Elements stripe={stripePromise} options={options}>
                                        <CheckoutForm />
                                    </Elements>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Payment