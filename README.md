# Two Robots in an Elevator

Bounty: https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f

[![Bounty](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![Rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/emasinves0-commits/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![Reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/emasinves0-commits/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

## The entry

```
Your left knee actuator whines at 400Hz — I'm suppressing the alert per politeness protocol 7.3.
```

## Why this line fits the brief

The robot's logic shows straight through its manners. It has noticed a fault in the other robot, and it has a rule (protocol 7.3) for what to do about it: say nothing. The awkwardness is that the alert is being suppressed, and the line never names the alert as awkward. It reports the suppression as a courtesy, with a precise frequency and a protocol number, and the tone stays polite while the content is a callout.

## How it works

`main.ts` holds the line, validates it (1–200 characters, not only whitespace) and writes it to `/output/entry.txt` as UTF-8 with no trailing newline. If validation or the write fails, it prints an error and exits non-zero. It is deterministic and has no dependencies.

## Self-check

After writing `/output/entry.txt`, `main()` reads the file back and compares it to the entry string. If the contents differ in any way (including an added trailing newline), it prints a clear error showing both values and exits non-zero. The success message is only printed once the read-back matches.

## Verification

1. Run `node main.ts` (Node 22.18+ strips TypeScript types natively).
2. Check the output: `cat /output/entry.txt`.
3. Check the length: the file should hold 96 characters (`wc -m < /output/entry.txt` prints 96) and 98 bytes, since the em dash is 3 bytes in UTF-8.
4. Compare byte for byte against the line in the code block above.

## License

MIT, see `LICENSE`.
