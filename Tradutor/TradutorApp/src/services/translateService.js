import axios from 'axios';

export const fetchTranslation = async (text) => {
  if (!text) return '';
  
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt-br|en-gb`;
    const res = await axios.get(url);
    return res.data.responseData.translatedText;
  } catch (err) {
    throw new Error("Erro na conexão com a API");
  }
};