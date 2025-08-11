import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_contacts';
  info: {
    displayName: 'Section Contact';
    icon: 'user';
  };
  attributes: {
    adresse: Schema.Attribute.Text;
    afficher_carte: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    email: Schema.Attribute.Email;
    horaires: Schema.Attribute.Text;
    telephone: Schema.Attribute.String;
    titre: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    whatsapp: Schema.Attribute.String;
  };
}

export interface SharedSectionGalerie extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_galeries';
  info: {
    displayName: 'Section Galerie';
    icon: 'picture';
  };
  attributes: {
    affichage: Schema.Attribute.Enumeration<['grille', 'carrousel']> &
      Schema.Attribute.DefaultTo<'grille'>;
    colonnes: Schema.Attribute.Enumeration<['deux', 'trois', 'quatre']> &
      Schema.Attribute.DefaultTo<'trois'>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    titre: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedSectionImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_images';
  info: {
    displayName: 'Section Image';
    icon: 'landscape';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    lien_url: Schema.Attribute.String;
    position_image: Schema.Attribute.Enumeration<
      ['gauche', 'droite', 'centre']
    > &
      Schema.Attribute.DefaultTo<'gauche'>;
    texte_alt: Schema.Attribute.String;
    titre: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedSectionTexte extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_textes';
  info: {
    displayName: 'Section Texte';
    icon: 'code';
  };
  attributes: {
    centrer_texte: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    contenu: Schema.Attribute.RichText & Schema.Attribute.Required;
    couleur_fond: Schema.Attribute.String;
    titre: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-contact': SharedSectionContact;
      'shared.section-galerie': SharedSectionGalerie;
      'shared.section-image': SharedSectionImage;
      'shared.section-texte': SharedSectionTexte;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
