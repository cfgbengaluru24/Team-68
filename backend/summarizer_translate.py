import re
import spacy
import nltk
import streamlit as st
from deep_translator import GoogleTranslator
from nltk.tokenize import sent_tokenize

nltk.download('punkt')

# Load the SpaCy model
nlp = spacy.load("en_core_web_sm")

# Function to extract features
def extract_features(text):
    features = {
        'category': 'N/A',
        'description': 'N/A',
        'date_of_release': 'N/A',
        'end_of_release': 'N/A'
    }

    # Extract category
    category_pattern = re.compile(r'(category|caste|tribe|class|community)[^\n]*', re.IGNORECASE)
    category_match = category_pattern.search(text)
    if category_match:
        features['category'] = category_match.group()

    # Extract dates
    date_pattern = re.compile(r'(\d{4})', re.IGNORECASE)
    dates = date_pattern.findall(text)
    if dates:
        features['date_of_release'] = dates[0]
        if len(dates) > 1:
            features['end_of_release'] = dates[1]

    # Extract description
    sentences = sent_tokenize(text)
    if sentences:
        features['description'] = sentences[0] if len(sentences[0]) > 20 else ' '.join(sentences[:2])

    return features

# Streamlit App
st.title("Text Translation and Feature Extraction App")

# File uploader
uploaded_file = st.file_uploader("Choose a text file", type="txt")

if uploaded_file is not None:
    # Read the uploaded file
    try:
        text = uploaded_file.read().decode("utf-8")
        if len(text.strip()) == 0:
            st.warning("The uploaded file is empty. Please upload a valid text file.")
        else:
            st.text_area("Original Text", text, height=250)

            # Language selection
            languages = {
                'Hindi': 'hi',
                'Spanish': 'es',
                'French': 'fr',
                'German': 'de',
                'Chinese': 'zh',
                'Arabic': 'ar'
            }
            lang = st.selectbox("Select the language you want your text translated to", options=list(languages.keys()))

            # Translation button
            if st.button("Translate"):
                target_lang_code = languages[lang]
                try:
                    translated = GoogleTranslator(source='auto', target=target_lang_code).translate(text)
                    if len(translated.strip()) == 0:
                        st.warning("Translation failed or resulted in empty text.")
                    else:
                        st.text_area("Translated Text", translated, height=250)

                        # Extract features from the translated text
                        extracted_features = extract_features(translated)

                        # Display the extracted features
                        st.write("Extracted Features:")
                        st.write(f"Category: {extracted_features['category']}")
                        st.write(f"Description: {extracted_features['description']}")
                        st.write(f"Date of Release: {extracted_features['date_of_release']}")
                        st.write(f"End of Release: {extracted_features['end_of_release']}")
                except Exception as e:
                    st.error(f"Translation error: {e}")
    except Exception as e:
        st.error(f"File read error: {e}")
else:
    st.write("Please upload a text file to start processing.")