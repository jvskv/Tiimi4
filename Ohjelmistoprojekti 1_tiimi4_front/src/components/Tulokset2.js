import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


    function Tulokset2(props) {
        return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Paras ohjelmointikieli</TableCell>
                    <TableCell align="right">Paras koodieditori</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.tulokset2.map((tulos2) => (
                    <TableRow
                      key={tulos2.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {tulos2.id}
                      </TableCell>
                      <TableCell align="right">{tulos2.koodieditori}</TableCell>
                      <TableCell align="right">{tulos2.ohjelmointikieli}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
      }

export default Tulokset2;