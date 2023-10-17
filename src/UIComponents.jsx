import styled from "styled-components"

function UIComponents() {

    return (
        <>
            <Circle />
        </>

    )

}
const Circle = styled.div`
border-radius:50%;
height:200px;
width:200px;
overflow:hidden;
background:linear-gradient(to right , #ff5e62, #ff9966);
position:absolute;
top:60%;
left:70%;
z-index:1
    `
export default UIComponents