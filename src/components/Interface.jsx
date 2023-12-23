export const Interface = (props) => 
{
    // const { audio, setAudio } = props
    // const toggleAudio = () =>
    // {
    //     if(audio)
    //     {
    //         setAudio(false)
    //     }
    //     if(!audio)
    //     {
    //         setAudio(true)
    //     }
    // }

    return(
    <>
            <header className='absolute top-0 right-0 flex justify-end'>
                <ul className='flex items-end mt-0 text-[25px]'>
                    <li className='px-4 py-2 text-[#cb3838]'>
                        <a href="https://mstdn.social/@stux" target="_blank">
                            creator
                        </a>
                    </li>
                    <li className='px-4 py-2 text-[#cb3838]'>
                        <a href="https://stux.xyz/stux/xmas" target="_blank">
                            source
                        </a>
                    </li>
                    {/* <li className='px-4 py-2 text-[#cb3838]'>
                        <a href="#" target="_blank">
                            soundtrack
                        </a>
                    </li> */}
                </ul>
            </header>
            {/* <div className="absolute bottom-0 right-0 p-4">
                <div className="flex">
                    <div onClick={ toggleAudio }>
                        <FontAwesomeIcon icon={audio ? faVolumeHigh : faVolumeLow } size='lg' color={audio ? '#ffffff' : '#fc6d27'} />
                    </div>
                </div>
            </div> */}
    </>)
}