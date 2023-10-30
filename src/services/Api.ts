export const API_URL =
  'https://parallelum.com.br/fipe/api/v1/carros/marcas';

  export function BRAND_GET() {
    return {
      url: `${API_URL}`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // caches: "force-cache"
      },
    };
  }

  export function MODEL_GET(brandId: string | undefined) {
    return {
      url: `${API_URL}/${brandId}/modelos`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };
  }

  export function YEAR_MODEL_GET(brandId: string | undefined, modelId: string | undefined) {
    return {
      url: `${API_URL}/${brandId}/modelos/${modelId}/anos`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };
  }

  export function INFO_CAR_GET(brandId: string | undefined, modelId: string | undefined, yearId: string | undefined) {
    return {
      url: `${API_URL}/${brandId}/modelos/${modelId}/anos/${yearId}`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };
  }