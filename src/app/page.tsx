import Link from "next/link"
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex justify-center items-center py-10 space-x-8">
      <Link href={"/signup"} className="w-36 h-16 bg-blue-400 text-white font-bold flex justify-center items-center rounded-md">SignUp</Link>
      <Link href={"/signin"} className="w-36 h-16 bg-green-400 text-white font-bold flex justify-center items-center rounded-md">Log-in</Link>
      <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}
