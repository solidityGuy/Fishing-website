import React from 'react'
import { Video, InfoContainer, InfoWrapper, InfoRow, ImgWrap, Img, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './InfoElements'
import { Button } from '../ButtonElement';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primaryButton, darkTextButton, dark2}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine lightText={lightText}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button to='/products' smooth={true} duration={500} spy={true} exact="true" offset={-80} primaryButton={primaryButton ? 1 : 0} darkTextButton={darkTextButton ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
								</BtnWrap>														
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Video autoPlay loop muted src={img} alt={alt}/>
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>	
		</>
	)
}

export default InfoSection