import * as SC from "./Address.styled";

export const Address = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.Span>CONTACT</SC.Span>
        <SC.Title>Nu ezita să ne contactezi</SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          Ne poți contacta pe email, numărul de telefon sau completând
          formularul de mai jos.
        </SC.Descrp>
        <SC.Div>
          <SC.Block>
            <SC.HeadingTitle>ADRESA:</SC.HeadingTitle>
            <SC.Information>Parcul IMM Slobozia</SC.Information>
          </SC.Block>
          <SC.Block>
            <SC.HeadingTitle>EMAIL:</SC.HeadingTitle>
            <SC.Information>office@zafini.ro</SC.Information>
          </SC.Block>
          <SC.Block>
            <SC.HeadingTitle>TELEFON</SC.HeadingTitle>
            <SC.Information>(0722) 540 998 </SC.Information>
            <SC.Information>(0726) 746 400</SC.Information>
          </SC.Block>
        </SC.Div>
      </SC.Wrapper>
    </>
  );
};
