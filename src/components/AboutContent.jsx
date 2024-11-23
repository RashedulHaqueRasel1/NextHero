import Link from "next/link";

const AboutContent = () => {
    return (
        <div>

            <div className="text-3xl text-center text-green-500 flex justify-around">
                <Link href={'/about/history'}>History</Link>
                <Link href={'/about/mission'}>Mission</Link>
            </div>

        </div>
    );
};

export default AboutContent;