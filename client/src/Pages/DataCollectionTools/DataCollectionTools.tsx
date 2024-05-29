const DataCollectionTools = () => {
    const tools = [
        { id: 1, name: 'Tool A', description: 'Description of Tool A' },
        { id: 2, name: 'Tool B', description: 'Description of Tool B' },
        { id: 3, name: 'Tool C', description: 'Description of Tool C' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Data Collection Tools</h2>
            <ul className="space-y-4">
                {tools.map((tool) => (
                    <li key={tool.id} className="border p-4 rounded">
                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                        <p>{tool.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataCollectionTools;
