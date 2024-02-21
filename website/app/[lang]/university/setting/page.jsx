import { IoMdSettings } from 'react-icons/io'
import PassSetting from '../../../UI/passSetting/PassSetting'

export default function page() {
  return (
    <div className='flex justify-center w-full py-8 '>
      <div className='max-w-[70%] w-full'>
        <div className='font-bold text-4xl flex items-center justify-center gap-2'>
          <IoMdSettings />
          <h1>Ayarlar</h1>
        </div>
        <PassSetting role={"uni"} />
      </div>
    </div>
  )
}
