import ReactPlayer from 'react-player'
import BeatleWebWellcome from '../../components/Wellcome/BeatleWebWellcome'
import './Home.css'

const HomePage = () => {
    console.log(process.env)

    return (
        <>
            {
                process.env.REACT_APP_VIDEO === 'true'
                    ?
                    <div className='background' style={{ width: '100%', height: '100%', position: 'absolute' }}>
                        <ReactPlayer
                            url={'../../../BeatleWeb.mp4'}
                            width='100%'
                            height='100%'
                            controls
                            playing
                        ></ReactPlayer>

                        <BeatleWebWellcome />
                    </div>
                    :
                    <>
                        <div className='backgroundImg'></div>
                        <BeatleWebWellcome />
                    </>
            }
        </>
    )
}

export default HomePage