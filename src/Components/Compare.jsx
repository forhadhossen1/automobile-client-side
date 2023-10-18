
const Compare = () => {
    return (
        <div className="flex flex-col md:flex-row h-[60vh] items-center bg-slate-300">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl text-orange-700 font-bold py-3">Compare Cars</h2>
                <p className="bg-white p-5 rounded-lg">Which cars interest you? We will highlight the differences to help you choose. <br /> View popular car comparisons or customize your own.</p>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn mt-4">Online Search</a>
            </div>
            <div className="md:w-1/2 p-4">
                <img src="https://i.ibb.co/xzSyQhk/compear.png" alt="Car Compare" className="w-full" />
            </div>
        </div>
    );
};

export default Compare;
