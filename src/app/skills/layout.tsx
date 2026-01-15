
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className=" h-1/2 bg-amber-200 text-black text-xl flex items-center justify-around gap-2">
            <ol>Home</ol>
            <ol>SKILLS</ol>
            <ol>Acheivements</ol>
        </div>
        {children}
    </> 
  );
}
