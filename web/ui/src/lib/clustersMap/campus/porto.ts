import { Campus } from '../campus';
import { Cluster } from '../cluster';
import { ICampus } from '../types';

//
export class Porto extends Campus implements ICampus {
  emoji = (): string => '🇵🇹';

  name = (): string => 'Porto';

  extractorRegexp = (): RegExp =>
    /(?<clusterWithLetter>(?<cluster>\d+))(?<rowWithLetter>(?<row>\w))(?<workspaceWithLetter>(?<workspace>\d+))/i;

  clusters(): Cluster[] {
    return [
      new Cluster({
        identifier: 'C1',
        // prettier-ignore
        map: [
			['T:r1',  'W:c1r1s1',  'W:c1r1s2',  'W:c1r1s3',  'W:c1r1s4',  'W:c1r1s5',  'T:r1' ],  
			['T:r2',  'W:c1r2s1',  'W:c1r2s2',  'W:c1r2s3',  'W:c1r2s4',  'W:c1r2s5',  'W:c1r2s6',  'W:c1r2s7',  'T:r2' ],
			['T:r3',  'W:c1r3s1',  'W:c1r3s2',  'W:c1r3s3',  'W:c1r3s4',  'W:c1r3s5',  'W:c1r3s6',  'W:c1r3s7',  'T:r3' ],
			['T:r4',  'W:c1r4s1',  'W:c1r4s2',  'W:c1r4s3',  'W:c1r4s4',  'W:c1r4s5',  'W:c1r4s6',  'W:c1r4s7',  'T:r4' ],
			['T:r5',  'W:c1r5s1',  'W:c1r5s2',  'W:c1r5s3',  'W:c1r5s4',  'W:c1r5s5',  'W:c1r5s6',  'W:c1r5s7',  'T:r5' ],
			['T:r6',  'W:c1r6s1',  'W:c1r6s2',  'W:c1r6s3',  'W:c1r6s4',  'W:c1r6s5',  'W:c1r6s6',  'W:c1r6s7',  'W:c1r6s8',  'W:c1r6s9',  'T:r6' ],
			['T:r7',  'W:c1r7s1',  'W:c1r7s2',  'W:c1r7s3',  'W:c1r7s4',  'W:c1r7s5',  'W:c1r7s6',  'W:c1r7s7',  'W:c1r7s8',  'W:c1r7s9',  'T:r7' ],
			['T:r8',  'W:c1r8s1',  'W:c1r8s2',  'W:c1r8s3',  'W:c1r8s4',  'W:c1r8s5',  'W:c1r8s6',  'W:c1r8s7',  'W:c1r8s8',  'W:c1r8s9',  'T:r8' ],
			['T:r9',  'W:c1r9s1',  'W:c1r9s2',  'W:c1r9s3',  'W:c1r9s4',  'W:c1r9s5',  'W:c1r9s6',  'W:c1r9s7',  'W:c1r9s8',  'W:c1r9s9',  'T:r9' ],
			['T:r10', 'W:c1r10s1', 'W:c1r10s2', 'W:c1r10s3', 'W:c1r10s4', 'W:c1r10s5', 'W:c1r10s6',  'W:c1r10s7',  'W:c1r10s8',  'W:c1r10s9',  'T:r10'],
			['T:r11', 'W:c1r11s1', 'W:c1r11s2', 'W:c1r11s3', 'W:c1r11s4', 'W:c1r11s5', 'W:c1r11s6',  'W:c1r11s7',  'W:c1r11s8',  'W:c1r11s9',  'T:r11'],
			['T:r12', 'W:c1r12s1', 'W:c1r12s2', 'W:c1r12s3', 'W:c1r12s4', 'W:c1r12s5', 'W:c1r12s6',  'W:c1r12s7',  'W:c1r12s8',  'W:c1r12s9',  'T:r12'],
			['T:r13', 'W:c1r13s1', 'W:c1r13s2', 'W:c1r13s3', 'W:c1r13s4', 'W:c1r13s5', 'W:c1r13s6',  'W:c1r13s7',  'W:c1r13s8',  'W:c1r13s9',  'T:r13'],
			['T:r14', 'W:c1r14s1', 'W:c1r14s2', 'W:c1r14s3', 'W:c1r14s4', 'W:c1r14s5', 'W:c1r14s6',  'W:c1r14s7',  'W:c1r14s8',  'W:c1r14s9',  'T:r14'],
			['T:r15', 'W:c1r15s1', 'W:c1r15s2', 'W:c1r15s3', 'W:c1r15s4', 'W:c1r15s5', 'W:c1r15s6',  'W:c1r15s7',  'W:c1r15s8',  'W:c1r15s9',  'T:r15'],
			['T:r16', 'W:c1r16s1', 'W:c1r16s2', 'W:c1r16s3', 'W:c1r16s4', 'W:c1r16s5', 'W:c1r16s6',  'W:c1r16s7',  'W:c1r16s8',  'W:c1r16s9',  'T:r16'],
        ],
      }),
      new Cluster({
        identifier: 'C2',
        // prettier-ignore
        map: [
			['T:r1',  'W:c1r1s1',  'W:c1r1s2',  'W:c1r1s3',  'W:c1r1s4',  'W:c1r1s5',  'W:c1r1s6',  'W:c1r1s7', 'W:c1r1s8',  'W:c1r1s9',  'W:c1r1s10',  'W:c1r1s11',  'T:r1' ],  
			['T:r2',  'W:c1r2s1',  'W:c1r2s2',  'W:c1r2s3',  'W:c1r2s4',  'W:c1r2s5',  'W:c1r1s6',  'W:c1r2s7', 'W:c1r2s8',  'W:c1r2s9',  'W:c1r2s10',  'W:c1r2s11',  'T:r2' ],
			['T:r3',  'W:c1r3s1',  'W:c1r3s2',  'W:c1r3s3',  'W:c1r3s4',  'W:c1r3s5',  'W:c1r1s6',  'W:c1r3s7', 'W:c1r3s8',  'W:c1r3s9',  'W:c1r3s10',  'W:c1r3s11',  'T:r3' ],
			['T:r4',  'W:c1r4s1',  'W:c1r4s2',  'W:c1r4s3',  'W:c1r4s4',  'W:c1r4s5',  'W:c1r1s6',  'W:c1r4s7', 'W:c1r4s8',  'W:c1r4s9',  'W:c1r4s10',  'W:c1r4s11',  'T:r4' ],
			['T:r5',  'W:c1r5s1',  'W:c1r5s2',  'W:c1r5s3',  'W:c1r5s4',  'W:c1r5s5',  'W:c1r1s6',  'W:c1r5s7', 'W:c1r5s8',  'W:c1r5s9',  'W:c1r5s10',  'W:c1r5s11',  'T:r5' ],
			['T:r6',  'W:c1r6s1',  'W:c1r6s2',  'W:c1r6s3',  'W:c1r6s4',  'W:c1r6s5',  'W:c1r1s6',  'W:c1r6s7', 'W:c1r6s8',  'W:c1r6s9',  'W:c1r6s10',  'W:c1r6s11',  'T:r6' ],
        ],
      })
    ];
  }
}
