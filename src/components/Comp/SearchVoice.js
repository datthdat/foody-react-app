import { Button, Input } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SpeechRecognition, {
    useSpeechRecognition
} from 'react-speech-recognition';
const SearchVoice = ({ search }) => {
    const [toggle, setToggle] = useState(true);
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [dataVoice, setDataVoice] = useState('')
    const setTurnOnBtn = () => {
        setToggle(!toggle);
    };


    const listenContinuously = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
        });
    };

    return (
        <div>
            <div className="flex justify-center px-2 py-2">
                <div className="px-2 py-2">
                    <div className="flex justify-center space-x-12 py-2">
                        <div>
                            {toggle === true ? (
                                <Button
                                    style={{ color: 'black' }}
                                    type="link"
                                    onClick={() => {
                                        listenContinuously();
                                        setTurnOnBtn();
                                        resetTranscript();
                                    }}
                                >
                                    <i className="fas fa-microphone text-3xl" />
                                </Button>
                            ) : (
                                <Button
                                    style={{ color: 'black' }}
                                    type="link"
                                    onClick={() => {
                                        SpeechRecognition.stopListening();
                                        setTurnOnBtn();
                                    }}
                                >
                                    <i className="fas fa-microphone-slash text-3xl" />
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="py-2 px-2 border">
                        <div className="p-2">
                            {transcript}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchVoice;
