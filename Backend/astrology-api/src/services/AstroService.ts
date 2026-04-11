import axios, { AxiosInstance } from "axios";
import { vedicAstroConfig } from "../config/vedicAstroConfig";
import { BaseService } from "../core/BaseService";
import { VedicParams } from "../types/vedic";
import { IAstroService } from "./interfaces/IAstroService";

export class AstroService extends BaseService implements IAstroService {
  protected readonly serviceName = "AstroService";
  private readonly client: AxiosInstance;

  constructor() {
    super();
    this.client = axios.create({
      baseURL: vedicAstroConfig.baseURL,
      timeout: vedicAstroConfig.timeout,
    });
  }

  private async callApi(
    endpoint: string,
    params: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    const response = await this.client.get(endpoint, {
      params: {
        ...params,
        api_key: vedicAstroConfig.apiKey,
        lang: "en",
      },
    });
    return response.data as Record<string, unknown>;
  }

  public fetchManglikDosh(params: VedicParams): Promise<Record<string, unknown>> {
    return this.callApi(vedicAstroConfig.endpoints.manglikDosh, { ...params });
  }

  public fetchOtherdosha(params: VedicParams, doshaType: string): Promise<Record<string, unknown>> {
    let endpoint = "";
    switch (doshaType) {
      case "kalsarp":
        endpoint = vedicAstroConfig.endpoints.kalsarpDosh;
        break;
      case "sadesati":
        endpoint = vedicAstroConfig.endpoints.sadesati;
        break;
      case "pitradosh":
        endpoint = vedicAstroConfig.endpoints.pitradosh;
        break;
      case "nadi":
        endpoint = vedicAstroConfig.endpoints.nadiDosh;
        break;
      default:
        throw new Error("Invalid dosha type for fetchOtherdosha");
    }
    return this.callApi(endpoint, { ...params });
  }

  public fetchBirthChart(params: VedicParams): Promise<Record<string, unknown>> {
    return this.callApi(vedicAstroConfig.endpoints.birthChart, { ...params });
  }
}

export const astroService = new AstroService();
