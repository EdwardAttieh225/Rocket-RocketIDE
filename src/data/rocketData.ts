import { CodeExample, ReleaseAsset } from '../types';

export const BENCHMARK_COUNT_MILLION = {
  title: 'Counting to 1,000,000 Benchmark',
  description: 'Sequential loop counter execution comparing Rocket LLVM native machine code vs Python bytecode execution.',
  iterations: 1000000,
  rocketTime: 0.166,
  pythonTime: 1.520,
  speedup: '9.1x',
  rocketCode: `fn main() -> Int:
    var count = 0
    while count < 1000000:
        count = count + 1
    print("Completed count to 1,000,000")
    return 0`,
  pythonCode: `def main():
    count = 0
    while count < 1000000:
        count += 1
    print("Completed count to 1,000,000")

main()`
};

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'test_rocket',
    title: 'test.rocket',
    description: 'Clean indentation syntax, inferred bindings, and standard output.',
    filename: 'test.rocket',
    code: `fn main() -> Int:
    let greeting = "Hello from Rocket"
    print(greeting)
    let x=6
    let y=7
    print(x)
    print(y)
    return 0`,
    simulatedOutput: `Hello from Rocket
6
7

[Process exited with code 0 in 11ms]`,
    compileTimeMs: 11,
    memoryMb: 1.1
  },
  {
    id: 'fibonacci',
    title: 'fibonacci.rocket',
    description: 'Recursive calculation with LLVM optimization and colon indentation.',
    filename: 'fibonacci.rocket',
    code: `fn fib(n: Int) -> Int:
    if n < 2:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

fn main() -> Int:
    print("Calculating fib(10)...")
    print(fib(10))
    return 0`,
    simulatedOutput: `Calculating fib(10)...
55

[Process exited with code 0 in 14ms]`,
    compileTimeMs: 14,
    memoryMb: 1.4
  },
  {
    id: 'language_tour',
    title: 'language_tour.rocket',
    description: 'Generics Pair[T], enums Message, slice views [1..3], and match expressions.',
    filename: 'language_tour.rocket',
    code: `import std.collections
import std.string

struct Pair[T]:
    first: T
    second: T

enum Message:
    Number(Int)
    Text(String)

fn parse_and_increment(text: String) -> Result[Int, String]:
    let value = string.parse_int(text)?
    return Ok(value + 1)

fn main() -> Int:
    let pair = Pair(10, 20)
    let values = [pair.first, pair.second, 30]
    let middle = values[1..3]
    print(collections.slice_length(middle))

    let result = parse_and_increment("41")
    match result:
        case Ok(value):
            print(value)
        case Err(error):
            print(error)

    let message = Text("Rocket Ready")
    match message:
        case Number(value):
            print(value)
        case Text(text):
            print(text)

    return 0`,
    simulatedOutput: `2
42
Rocket Ready

[Process exited with code 0 in 18ms]`,
    compileTimeMs: 18,
    memoryMb: 1.9
  },
  {
    id: 'ownership_concurrency',
    title: 'concurrency.rocket',
    description: 'Async tasks, ARC managed captures, buffer freeze/thaw, and atomic once_set.',
    filename: 'concurrency.rocket',
    code: `import std.buffer
import std.ownership
import std.sync
import std.task

struct Record:
    value: Int

async fn increment(value: Int) -> Result[Int, String]:
    return Ok(value + 1)

fn main() -> Int:
    let record = Record(41)
    let observer = ownership.downgrade(record)
    match ownership.upgrade(observer):
        case Some(live):
            print("Live record: " + live.value)
        case None:
            return 1

    let mutable = buffer.thaw([1, 2])
    let grown = buffer.append(mutable, 3)
    let frozen = buffer.freeze(grown)
    print("Frozen buffer element: " + frozen[2])

    let pending = increment(record.value)
    match task.join(pending):
        case Ok(value):
            print("Async task completed with: " + value)
        case Err(message):
            print(message)
            return 2

    return 0`,
    simulatedOutput: `Live record: 41
Frozen buffer element: 3
Async task completed with: 42

[Process exited with code 0 in 21ms]`,
    compileTimeMs: 21,
    memoryMb: 2.3
  }
];

export const GITHUB_REPO = 'RyanEid06/Rocket-RocketIDE';
export const CURRENT_RELEASE_TAG = 'v3.0.0';
export const GITHUB_RELEASES_URL = `https://github.com/${GITHUB_REPO}/releases`;
export const GITHUB_LATEST_RELEASE_URL = `https://github.com/${GITHUB_REPO}/releases/tag/${CURRENT_RELEASE_TAG}`;

export const getDownloadUrl = (filename: string): string => {
  return `https://github.com/${GITHUB_REPO}/releases/download/${CURRENT_RELEASE_TAG}/${filename}`;
};

export const RELEASE_ASSETS: ReleaseAsset[] = [
  {
    "id": "ide-win-zip",
    "name": "RocketIDE 1.0.0 Portable",
    "filename": "RocketIDE-win-x64-1.0.0.zip",
    "platform": "windows",
    "architecture": "windows-x64",
    "size": "132.0 MiB",
    "sha256": "a5e1966a322ec19e391a775ef1909fec32a51b36b3869215a0117fc24fcb174c",
    "type": "portable",
    "description": "Extract the complete archive and open RocketIDE.exe. Includes the .NET runtime and debugger. Download the Rocket SDK separately.",
    "recommended": true
  },
  {
    "id": "cli-windows-x64",
    "name": "Rocket 3.0.0 SDK (windows-x64)",
    "filename": "rocket-3.0.0-windows-x64.zip",
    "platform": "windows",
    "architecture": "windows-x64",
    "size": "319.1 MiB",
    "sha256": "42bae12625717a776dac358d9177a01d8dd91762d4e6ed91384fc46d34e45de7",
    "type": "toolchain",
    "description": "Native compiler (rocketc), language server, standard library, and toolchain. Extract the complete SDK; follow PACKAGE.md for setup.",
    "recommended": true
  },
  {
    "id": "cli-linux-x64",
    "name": "Rocket 3.0.0 SDK (linux-x64)",
    "filename": "rocket-3.0.0-linux-x64.tar.xz",
    "platform": "linux",
    "architecture": "linux-x64",
    "size": "540.1 MiB",
    "sha256": "1a716073f2941d7d4c63d25687a542d65164cafd24aba299e2b9880a615ad0fc",
    "type": "toolchain",
    "description": "Native compiler (rocketc), language server, standard library, and toolchain. Extract the complete SDK; follow PACKAGE.md for setup.",
    "recommended": true
  },
  {
    "id": "cli-linux-arm64",
    "name": "Rocket 3.0.0 SDK (linux-arm64)",
    "filename": "rocket-3.0.0-linux-arm64.tar.xz",
    "platform": "linux",
    "architecture": "linux-arm64",
    "size": "499.5 MiB",
    "sha256": "1db0eadfb0e592b36442e2993a8939baa5e04dd99dab7bc32737093e4a261c3e",
    "type": "toolchain",
    "description": "Native compiler (rocketc), language server, standard library, and toolchain. Extract the complete SDK; follow PACKAGE.md for setup.",
    "recommended": true
  },
  {
    "id": "cli-macos-arm64",
    "name": "Rocket 3.0.0 SDK (macos-arm64)",
    "filename": "rocket-3.0.0-macos-arm64.tar.xz",
    "platform": "macos",
    "architecture": "Apple Silicon ARM64",
    "size": "254.9 MiB",
    "sha256": "96192c6fda0a479c31d3bd4e1d4da67f400912f3faa30f60abc1cd7d1102dfa7",
    "type": "toolchain",
    "description": "Native compiler (rocketc), language server, standard library, and toolchain. Extract the complete SDK; follow PACKAGE.md for setup.",
    "recommended": true
  }
];
