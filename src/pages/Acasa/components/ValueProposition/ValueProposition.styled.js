import styled from 'styled-components'

export const Wrapper = styled.div`
padding-left: 10px;
margin-top: 60px;
padding-right: 10px;
background-color: #F9F9F9;
/* min-width:450px; */
@media(min-width: 768px) {
display: flex;
gap: 30px;
min-height: 842px;
}

`



export const HeadingTitle = styled.h3`
color: #F2F2F2;
font-size: 25px;
font-weight: 900;
margin-bottom: 15px;

`

export const Span = styled.h3`
color: #A70101;
margin-bottom: 20px;
`

export const Title = styled.h2`
color: #7b7c7c;
font-size: 30px;
margin-bottom: 25px;
`

export const Line = styled.span`
border-top: 3px solid #A70101;
border-radius: 5px;
width: 100px;
display: flex;
margin: 0 auto;
@media(min-width: 768px) {
margin: 0;
}
`

export const Descrp = styled.p`
font-size: 19px;
color: #7a7a7a;
margin-top: 15px;
margin-bottom: 30px;
`

export const RightBlock = styled.div`
@media(min-width: 768px) {
order:2;
}

`

export const LeftBlock = styled.div`
@media(min-width: 768px) {
order:1;
}


`

export const List = styled.ul`

`

export const Item = styled.li`
 list-style: none;
 @media(min-width: 768px) {
 display: flex;
 }

`

export const Div = styled.div`

`

export const ImgI = styled.img`
width:35px;
height:35px;
margin-top: 40px;

`

export const Headline = styled.h2`
color: #7B7C7C;
    font-family: "Nunito Sans", Sans-serif; 
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2em;
    letter-spacing: 0.5px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Text = styled.p`
font-size: 19px;
color: #7a7a7a;

`

export const Img= styled.img`
width: 100%;
height: 300px;
margin-top: 20px;
margin-bottom: 99px;
@media(min-width: 768px) {
   min-width: 364px; 
  
}
`
