import * as SC from "./Gallery.styled";
import { IMG } from "../../../images";

export const Gallery = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.Title>Galerie</SC.Title>
        <SC.List>
          <SC.Item>
            <SC.Img src={IMG.produseGalleryLaser} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseHero} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.heroImage} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseModule} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseWomanInContainer} alt="introducing" />
          </SC.Item>

          <SC.Item>
            <SC.Img src={IMG.produseOpenContainer} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.despreHorizonts} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseGalleryRedContainer} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseGalleryGreyContainer} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.produseGalleryBlueContainer} alt="introducing" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.worker} alt="worker" />
          </SC.Item>
          <SC.Item>
            <SC.Img src={IMG.despreIntroducing} alt="introducing" />
          </SC.Item>
        </SC.List>
      </SC.Wrapper>
    </>
  );
};
