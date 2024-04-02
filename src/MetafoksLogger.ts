import { configure, getLogger, Logger as CoreLogger } from 'log4js'

export type Logger = CoreLogger

/**
 * Фабрика логирования
 */
export class LoggerFactory {
  /**
   * Настройка логов
   */
  public static configure = configure

  public static create(it: any): Logger {
    return this.createWithName(it.name)
  }

  public static createWithName(name: string): Logger {
    return getLogger(name)
  }
}

export function createLogger(it: any): Logger {
  return LoggerFactory.create(it)
}
