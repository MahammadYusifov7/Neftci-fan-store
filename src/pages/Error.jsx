export default function Error() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-black text-[15px]">
                <p className="mb-4">
                    Axtardığınız səhifəni tapa bilmədik. Bu ya ona görədir:
                </p>

                <ul className="list-disc pl-10 mb-6 space-y-1">
                    <li>
                        Veb brauzerinizə daxil edilmiş URL-də xəta var. Lütfən, URL-i yoxlayın və yenidən cəhd edin.
                    </li>
                    <li>
                        Axtardığınız səhifə köçürülüb və ya silinib.
                    </li>
                </ul>
                
            </div>
        </div>
    );
}