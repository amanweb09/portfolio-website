import { useRouter } from 'next/router'

const ServicesBox = ({ icon, heading, para, size, link }) => {

    const router = useRouter()

    return (
        <div
            onClick={() => router.push(link)}
            style={{
                background: "#FCFCFC",
                boxShadow: "inset 5px 6px 28px 1px rgba(36, 36, 36, 0.25)",
                width: size ? size.width : "",
                transition: '0.3s'
            }}
            className="rounded-3xl flex-center flex-col flex-1 h-80 cursor-pointer box mx-10">
            <img
                className="w-20"
                src={icon}
                alt="web" />

            <h1 className="uppercase font-bold text-lg mt-6 mb-2">{heading}</h1>

            <p className="text-gray-600 text-xs px-4 text-center">
                {para}
            </p>

            <style jsx>
                {
                    `
        .box:hover {
            transform: scale(1.05)
        }
    `
                }
            </style>
        </div>
    );
}

export default ServicesBox;