import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('2ab405e5-9609-4196-8b11-b5e51b8fa088', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
        </div> 
    )
}

export default ChatsPage