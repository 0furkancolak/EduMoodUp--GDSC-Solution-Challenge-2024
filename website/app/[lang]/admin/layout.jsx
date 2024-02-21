import AdminSidebar from "@/app/UI/admin/sidebar/AdminSidebar";


export default async function AdminLayout({ children, params }) {
  return (
    <>
      <div className="flex md:hidden h-screen w-full justify-center items-center">
        <p>Lütfen daha büyük boyutlu bir ekrandan giriniz</p>
      </div>
      <div className="hidden md:flex">
        <section className="w-[20%] min-h-screen">
          <AdminSidebar lang={params.lang} />
        </section>
        <section className="flex flex-1">{children}</section>
      </div>
    </>
  );
}
