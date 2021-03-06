import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Sticky from 'react-stickynode';
import { Button, Input } from 'antd';
import { SearchVoice } from '..';
import useSpeechToText from 'react-hook-speech-to-text';
import SpeechRecognition, {
    useSpeechRecognition
} from 'react-speech-recognition';
import { Helmet } from 'react-helmet';
const ProductsScreen = (props) => {

    const { setLoadMore, products, loadMore, onAdd } = props
    const PageProduct = window.location.pathname
    const [search, setSearch] = useState('')
    const filterData = products.filter(items => items.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const [useVoice, setUseVoice] = useState('')
    const [toggle, setToggle] = useState(true);
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [dataVoice, setDataVoice] = useState('')
    const mic = false
    const setTurnOnBtn = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        setSearch(transcript)
    }, [transcript])

    const listenContinuously = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
        });
    };

    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <div className="flex justify-center container mx-auto px-10 bg-gray-300">
                <div className="w-1/5" >
                    <aside className="h-screen sticky top-0 h-32 scrollbar scrollbar-thumb-red-900 rounded-md" id="journal-scroll" >
                        <div className="flex justify-center">
                            <ProSidebar
                                width={200}
                                height={300}
                                image={"https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-delicious-chocolate-cake-with-premium-frosting-2-kg--135598-m.jpg"}
                                popperArrow={true}
                            >
                                <Menu iconShape="square">
                                    <MenuItem className=" text-center">

                                        {/* <Input
                                        size="small"
                                        style={{
                                            padding: 4,
                                        }}
                                        onChange={e => setSearch(e.target.value)}
                                        placeholder="Search..."
                                        prefix={
                                            <i className="fas fa-search"
                                                onClick={isRecording ? stopSpeechToText : startSpeechToText} ></i>
                                        } /> */}

                                        <Input
                                            onChange={e => setSearch(e.target.value)}
                                            prefix={
                                                <i className="fas fa-search" />
                                            } suffix={
                                                toggle === true ? (
                                                    <i className="fas fa-microphone-alt"
                                                        onClick={() => {
                                                            listenContinuously();
                                                            setTurnOnBtn(true);
                                                            resetTranscript();
                                                        }}
                                                    />
                                                )
                                                    : (
                                                        <i className="fas fa-microphone-alt-slash"
                                                            onClick={() => {
                                                                SpeechRecognition.stopListening();
                                                                setTurnOnBtn(false);
                                                            }}
                                                        />
                                                    )
                                            }
                                            defaultValue={transcript}
                                        />

                                    </MenuItem>
                                    <SubMenu title="Chocolates" icon={<i className="fas fa-birthday-cake" />} defaultOpen={true}>
                                        {/* <MenuItem>
                                        <SearchVoice search={search} />
                                    </MenuItem> */}

                                        <MenuItem>voice : {transcript} </MenuItem>
                                        <MenuItem>Chocolates</MenuItem>
                                        <MenuItem>Chocolates</MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Drinks" icon={<i className="fas fa-coffee" />} defaultOpen={true}>
                                        <MenuItem>Drinks</MenuItem>
                                        <MenuItem>Drinks</MenuItem>
                                        <MenuItem>Drinks</MenuItem>
                                        <MenuItem>Drinks</MenuItem>
                                        <MenuItem>Drinks</MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Cakes" icon={<i className="fas fa-cookie-bite" />} defaultOpen={false}>
                                        <MenuItem>Cakes</MenuItem>
                                        <MenuItem>Cakes</MenuItem>
                                        <MenuItem>Cakes</MenuItem>
                                        <MenuItem>Cakes</MenuItem>
                                        <MenuItem>Cakes</MenuItem>
                                    </SubMenu>
                                </Menu>
                            </ProSidebar>
                        </div>
                    </aside>
                </div>

                <div className="w-4/5">
                    <div className="flex justify-center">
                        <Products
                            products={filterData}
                            onAdd={onAdd}
                            setLoadMore={setLoadMore}
                            loadMore={loadMore}
                            PageProduct={PageProduct}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductsScreen
