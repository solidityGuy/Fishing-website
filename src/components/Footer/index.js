import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Sobre nós</FooterLinkTitle>
								<FooterLink to="/">Como funciona</FooterLink>
								<FooterLink to="/">Relatos de clientes</FooterLink>
								<FooterLink to="/">Nossos parceiros</FooterLink>
								<FooterLink to="/">Termos de Serviço</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contato</FooterLinkTitle>
								<FooterLink to="/">Contato</FooterLink>
								<FooterLink to="/">Suporte</FooterLink>
								<FooterLink to="/">Sistema de Patrocínio</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Vídeos</FooterLinkTitle>
								<FooterLink to="/">Enviar vídeo</FooterLink>
								<FooterLink to="/">Influencers</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Redes sociais</FooterLinkTitle>
								<FooterLink to="/">Instagram</FooterLink>
								<FooterLink to="/">Facebook</FooterLink>
								<FooterLink to="/">Youtube</FooterLink>
								<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/"></SocialLogo>
						<WebsiteRights>Pesca Produtos © {new Date().getFullYear()} All rights reserved.</WebsiteRights>					
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer