export class HttpClient {
  static baseUrl = ""
  static setBaseUrl(url: string) {
    this.baseUrl = url
  }

  static async get<T = any>(url: string, cache: RequestCache = "no-cache"): Promise<T> {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Cache-Control": cache },
      cache,
    })
    if (!res.ok) return await this.handleError(res)
    return res.json()
  }

  static async post<T = any>(url: string, body?: any): Promise<T> {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
      cache: "no-cache",
      body: JSON.stringify(body),
    })
    if (!res.ok) return await this.handleError(res)
    if (res.status === 204) return {} as T
    return res.json()
  }

  static async put<T = any>(url: string, body?: any): Promise<T> {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
      cache: "no-cache",
      body: JSON.stringify(body),
    })
    if (!res.ok) return await this.handleError(res)
    return res.json()
  }

  static async delete(url: string): Promise<void> {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
      cache: "no-cache",
    })
    if (!res.ok) return await this.handleError(res)
    return
  }

  private static async handleError(res: Response): Promise<never> {
    try {
      const errorPayload = await res.json()
      throw errorPayload
    } catch {
      throw {
        success: false,
        code: res.status,
        message: "Unknown API error",
        data: null,
        errors: [],
        timestamp: new Date().toISOString(),
        // } satisfies ApiErrorResponse
      } satisfies any
    }
  }
}
