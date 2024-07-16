import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/components/_audioPlayer.scss';

const AudioPlayer = ({ audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleCanPlay = () => {
            if (localStorage.getItem('isPlaying') === 'true') {
                audioElement.play();
                setIsPlaying(true);
            }
        };

        audioElement.addEventListener('canplay', handleCanPlay);

        return () => {
            audioElement.removeEventListener('canplay', handleCanPlay);
        };
    }, [audioSrc]);

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && localStorage.getItem('isPlaying') === 'true') {
                audioElement.play();
                setIsPlaying(true);
            } else {
                audioElement.pause();
                setIsPlaying(false);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [audioSrc]);

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleEnded = () => {
            // Lorsque la piste audio se termine, réinitialiser l'état de lecture
            setIsPlaying(false);
            localStorage.setItem('isPlaying', 'false');
        };

        audioElement.addEventListener('ended', handleEnded);

        return () => {
            audioElement.removeEventListener('ended', handleEnded);
        };
    }, [audioSrc]);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (localStorage.getItem('isPlaying') === 'true') {
            audioElement.play();
            setIsPlaying(true);
        }

        return () => {
            audioElement.pause();
            setIsPlaying(false);
        };
    }, []);

    const togglePlayPause = () => {
        const audioElement = audioRef.current;
        if (audioElement.paused) {
            audioElement.play();
            setIsPlaying(true);
            localStorage.setItem('isPlaying', 'true');
        } else {
            audioElement.pause();
            setIsPlaying(false);
            localStorage.setItem('isPlaying', 'false');
        }
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={audioSrc}></audio>

            <div className="controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

AudioPlayer.propTypes = {
    audioSrc: PropTypes.string.isRequired,
};

export default AudioPlayer;