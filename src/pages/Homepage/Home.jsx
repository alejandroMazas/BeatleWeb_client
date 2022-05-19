import ReactPlayer from 'react-player'
import BeatleWebWellcome from '../../components/Wellcome/BeatleWebWellcome'
import './Home.css'

const HomePage = () => {


    return (
        <>
            <div className='background'></div>
                {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}> */}
                {/* <ReactPlayer
                        url={''}
                        width='100%'
                        height='100%'
                        controls
                        playing
                    ></ReactPlayer> */}

                <BeatleWebWellcome />
                {/* </div> */}
        </>
    )
}

export default HomePage