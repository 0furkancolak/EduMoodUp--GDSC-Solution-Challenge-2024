import UniSidebar from "@/app/UI/university/sidebar/UniSidebar";

export default async function UniLayout({ children, params }) {
  return (
    <>
      <div className="flex md:hidden h-screen w-full justify-center items-center">
        <p>Lütfen daha büyük boyutlu bir ekrandan giriniz</p>
      </div> 
      <div className="hidden md:flex">
        <section className="w-[20%] min-h-screen">
          <UniSidebar lang={params.lang} />
        </section>
        <section className="flex flex-1">{children}</section>
      </div>
    </>
  );
}
