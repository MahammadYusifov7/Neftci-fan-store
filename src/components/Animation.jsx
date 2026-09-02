const AnnouncementBar = () => {
    const Content = () => (
        <>
            <span className="text-white font-bold">NEFTÇİ OFFICIAL STORE</span>
            <span className="text-amber-400 italic">RƏSMİ MAĞAZA</span>
        </>
    );

    return (
        <div className="w-full bg-black py-4 overflow-hidden select-none border-b border-zinc-800">
            <div className="animate-marquee whitespace-nowrap text-lg tracking-wider">
                <div className="flex items-center gap-12 px-8">
                    <Content />
                    <Content />
                    <Content />
                </div>
                <div className="flex items-center gap-12 px-8">
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;