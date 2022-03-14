const Service = ({ children, heading, para, btnCss }) => {
    return (
        <div
            className="w-full py-4 sm:px-0 px-2">
            {children}

            <h1 className="text-center font-bold uppercase text-3xl">{heading}</h1>
            <p
                style={{ color: "#3E3C3C" }}
                className="text-center text-sm font-light px-8 mt-2">
                {para}
            </p>

            <button
                style={btnCss}
                className="w-64 h-12 block mx-auto mt-8 mb-4">GET QUOTATION</button>
        </div>
    );
}

export default Service;