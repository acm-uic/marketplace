export default function Overlay({ children,handleModalClose }){

    return (
        <div onClick={handleModalClose} className="absolute overflow-hidden top-0 left-0 h-screen w-full bg-black/70 flex items-center justify-center z-1">
            {children}
        </div>
    )
}