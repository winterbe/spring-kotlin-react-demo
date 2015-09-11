package demo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import kotlin.platform.platformStatic

/**
 *
 * @author Benjamin Winterberg
 */
SpringBootApplication
open class Application {
    companion object {
        platformStatic fun main(args: Array<String>) {
            SpringApplication.run(javaClass<Application>(), *args)
        }
    }
}