import { Popover } from "@headlessui/react"
import { Link } from "react-router-dom"
import { useAccount } from "~/store/auth/hooks"

export default function Account() {
  const account = useAccount()
  return (
    <div className='mt-auto'>
      <Popover className="relative">
        <Popover.Button
        className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center justify-center outline-none"
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt={account.name} />
          <div className="mx-3 text-[15px]  ">
            {account.username}
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute bottom-full  w-[260px] z-[1] border border-[#480f04] my-2 bg-black shadow-box rounded-2xl " >
          <div className="py-3 px-4">
            <Link to="/">
              Çıkış yap
            </Link>
            
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
