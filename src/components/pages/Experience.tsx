import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx'

const Table = styled.table`
    border: 1px solid #D17D98;
    color: #56021F;
`;
const TableHeader = styled.th`
    background-color: #7D1C4A;
    color: #F4CCE9;
    padding: 10px;
    text-align: center;
`;
const TableBody = styled.td`
    border: 1px solid #D17D98;
    padding: 10px;
    text-align: left;
`;



export default function Experience() {
    return (
        <Layout title="Work Experience">
            <Table>
                <thead>
                <tr>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Description</TableHeader>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <TableBody><b>DevOps Intern</b><br/>
                        <small>TensorStax</small><br/>
                        <small>March 2025-Present</small><br/>
                    </TableBody>
                    <TableBody>Automated infrastructure handling in data pipelines to support AI Agents </TableBody>
                </tr>
                <tr>
                   <TableBody>
                       <b>Advanced Technology Solutions Development Intern</b><br/>
                       <small>World Wide Technology</small><br/>
                       <small>May 2024-Present</small><br/></TableBody>
                    <TableBody><b>Projects:</b>
                        <ul>
                            <li>Created educational content such as articles and videos for customers on different
                                technologies and their applications for the Datacenter and AI, Automation, Security, and
                                Networking team.
                            </li>
                            <li>Cybersecurity Bootcamp</li>
                        </ul></TableBody>
                </tr>
                <tr>
                    <TableBody>
                        <b>Business Intelligence and Analytics Intern</b><br/>
                        <small>World Wide Technology</small><br/>
                        <small>May 2023-April 2024</small><br/>
                    </TableBody>
                    <TableBody>
                        <b>Projects:</b>
                        <ul>
                            <li>Data Analytics Report in Python</li>
                            <li>Data Visualization in Tableau</li>
                            <li>Data Diagnostic Report in Power BI</li>
                            <li>Executive Financial Report in Python</li>
                        </ul>
                        <b>Independent Projects:</b><br/>
                        <ul>
                            <li>Capstone Project - Capture the Flag Engagement Database</li>
                            <li>Capture the Flag Daemon (CTFd) Hacker Competition</li>
                            <li> Intern Committee Leader</li>
                            <li>Organized a Day of Caring</li>
                        </ul>
                    </TableBody>
                </tr>
                <tr>
                    <TableBody>
                        <b>Sales Operation Intern</b><br/>
                        <small>World Wide Technology</small><br/>
                        <small>May 2022-August 2022</small><br/>
                    </TableBody>
                    <TableBody>
                        <b>Projects:</b>
                        <ul>
                            <li>Processing POs in Salesforce</li>
                            <li>PO Status report in Excel</li>
                            <li>Customer Relations</li>
                        </ul>
                        <b>Independent Projects:</b><br/>
                        <ul>
                            <li>Capstone Project - Optimized Floor Layout for WWT's Warehouse</li>
                        </ul>
                    </TableBody>
                </tr>

                </tbody>
            </Table>
        </Layout>
    )
}