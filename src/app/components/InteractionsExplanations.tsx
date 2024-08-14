import ArrayUpLogo from '@/../public/icons/arrow-up.svg';
import ArrayDownLogo from '@/../public/icons/arrow-down.svg';
import ManipulateLogo from '@/../public/icons/manipulate.svg';
import Image from "next/image";

const InteractionsExplanations = () => {
    return (
        <div className="absolute left-4 top-60 p-6 bg-transparent rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">To interact with the model you have two choices:</h3>
            <p className="text-gray-400">1. Use the keyboard:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                    <Image src={ArrayUpLogo} alt="Arrow Up" className="inline-block w-4 h-4 mr-2"/>
                    Press the <strong className="text-gray-400">Arrow Up</strong> key to go upward.
                </li>
                <li>
                    <Image src={ArrayDownLogo} alt="Arrow Down" className="inline-block w-4 h-4 mr-2"/>
                    Press the <strong className="text-gray-400">Arrow Down</strong> key to go backward.
                </li>
            </ul>
            <p className="text-gray-400">
                2. Use the mouse to manipulate the DOM.
                <Image src={ManipulateLogo} alt="Manipulate" className="inline-block w-6 h-6 ml-2"/>
            </p>
        </div>
    );
}

export default InteractionsExplanations;
