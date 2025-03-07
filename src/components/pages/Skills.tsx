import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';
//make accessable to dif screen size
const Table = styled.table`
    border: 1px solid #D17D98;
    color: #56021F;
`;

const TableBody = styled.td`
    border: 1px solid #D17D98;
    padding: 10px;
    text-align: left;
`;

export default function Skills(){
    return (
        <Layout title="Skills">
            <Table>
               <tbody>
               <tr>
                   <TableBody>
                       <b>Languages</b>
                   </TableBody>
                   <TableBody>
                       <ul>
                           <li>Java</li>
                           <li>Python</li>
                           <li>JavaScript</li>
                           <li>Go</li>
                           <li>Kotlin</li>
                           <li>SQL</li>
                           <li>C</li>
                           <li>Proficient in Chinese</li>
                       </ul>
                   </TableBody>
               </tr>
               <tr>
                   <TableBody>
                       <b>Libraries and Frameworks</b>
                   </TableBody>
                   <TableBody>
                       <ul>
                           <li>React.js</li>
                           <li>Node.js</li>
                           <li>Next.js</li>
                           <li>Django</li>
                           <li>Flask</li>
                       </ul>
                   </TableBody>
               </tr>
               <tr>
                   <TableBody>
                       <b>Software Engineering</b>
                   </TableBody>
                   <TableBody>
                       <ul>
                           <li>Object Oriented Programming</li>
                           <li>Distributed Systems (MapReduce, Raft)</li>
                           <li>Database Systems (SQL, Java implemented MapReduce)</li>
                           <li>Working With and Building APIs</li>
                           <li>Optimized Algorithms</li>
                           <li>Technical Writing (Latex Overleaf)</li>
                           <li>Cyber Security</li>
                           <li>Full Stack Applications</li>
                           <li>Mobile Applications</li>
                           <li>CLIP AI</li>
                       </ul>
                   </TableBody>

               </tr>
               <tr>
                   <TableBody>
                       <b>Data</b>
                   </TableBody>
                   <TableBody>      <ul>
                       <li>SQL</li>
                       <li>Pandas & Numpy (Python)</li>
                       <li>Excel</li>
                       <li>Salesforce</li>
                       <li>Tensorflow</li>
                       <li>SkLearn</li>
                   </ul>
                   </TableBody>
               </tr>
               <tr>
                   <TableBody>
                       <b>Reporting</b>
                   </TableBody>
                   <TableBody><ul>
                       <li>
                           Tableau
                       </li>
                       <li>
                           PowerBI
                       </li>
                       <li>
                           Python
                       </li>
                       <li>
                           Matplotlib
                       </li>
                       <li>
                           Figma
                       </li>
                   </ul>
                   </TableBody>
               </tr>
               </tbody>
            </Table>
        </Layout>
    )
}