import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


    function Tulokset(props) {
        return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Kyselijän numero</TableCell>
                    <TableCell align="right">Paras yhtye</TableCell>
                    <TableCell align="right">Paras kappale</TableCell>
                    <TableCell align="right">Paras elokuva</TableCell>
                    <TableCell align="right">Paras ruoka</TableCell>
                    <TableCell align="right">Paras urheilulaji</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.tulokset.map((tulos) => (
                    <TableRow
                      key={tulos.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {tulos.id}
                      </TableCell>
                      <TableCell align="right">{tulos.num}</TableCell>
                      <TableCell align="right">{tulos.yhtye}</TableCell>
                      <TableCell align="right">{tulos.kappale}</TableCell>
                      <TableCell align="right">{tulos.elokuva}</TableCell>
                      <TableCell align="right">{tulos.ruoka}</TableCell>
                      <TableCell align="right">{tulos.urheilulaji}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
      }

export default Tulokset;

