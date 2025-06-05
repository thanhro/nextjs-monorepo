import nprogress from "nprogress"

export class Promisify {
  static executeWithLoading(execute) {
    return new Promise((resolve, reject) => {
      nprogress.start()

      execute()
        .then(resolve)
        .catch((err) => {
          reject(err)
        })
        .finally(nprogress.done)
    })
  }
}
