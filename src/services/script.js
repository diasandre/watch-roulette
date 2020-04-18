const data = {};

  export const values = data.catalog_title.link[5].catalog_titles.link.map(({href, title}) => {
    return {
      id: Number(href.split("/")[6]),
      title
    }
  });
  
  export const getJson = () => {
    console.log(JSON.stringify(values));
  }

