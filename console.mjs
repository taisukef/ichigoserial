import SerialPort from 'serialport'
import readline from 'readline'

const driver = '/dev/tty.SLAB_USBtoUART'
const port = new SerialPort(driver, { baudRate: 115200 })

const parser = new SerialPort.parsers.Readline()
port.pipe(parser)
parser.on('data', console.log)

const reader = readline.createInterface({ input: process.stdin })
reader.on('line', function (line) {
  port.write(Buffer.from(line + '\n'))
})