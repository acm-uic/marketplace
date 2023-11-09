import Image from "next/image"
import ACM from '../images/acmLogo2.png'

export default function Loading() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Image src={ACM} width={200} height={200} alt="ACM logo" />
            <div className="flex flex-row mt-4">
                <span className="animate-loading w-4 h-4 ml-2 bg-ACMDARK rounded-full inline "></span>
                <span className="animate-loading w-4 h-4 ml-2 bg-ACMDARK rounded-full inline" style={{animationDelay:'0.4s'}}></span>
                <spna className="animate-loading w-4 h-4 ml-2 bg-ACMDARK rounded-full inline" style={{animationDelay:'0.4s'}}></spna>
            </div>
        </div>
    )
}