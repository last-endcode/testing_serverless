const result = document.querySelector('.result');

const fetchData = async () => {
  // disini kita hanya mengambil nilai teks data saja shingga menggunakan
  // destructuring obj
  try {
    const { data } = await axios.get('/api/1-hello');
    result.textContent = data;
  } catch (error) {
    console.log(error.response);
  }
};

fetchData();
