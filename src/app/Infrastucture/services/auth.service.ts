import { PAuth } from "@/app/core/application/ports/auth.port";

import { ILoginRequest, ILoginResponse } from "@/app/core/application/dto";
import { HttpClient } from "../util/httpClient";

export class AuthService implements PAuth {
  private clientHttp: HttpClient;
  private basePath: string = "auth";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async login(req: ILoginRequest): Promise<ILoginResponse> {
    console.log("login", req);
    return await this.clientHttp.post<ILoginResponse, ILoginRequest>(
      `${this.basePath}/login`,
      req
    );
  }
}
