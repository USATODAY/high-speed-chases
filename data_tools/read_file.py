import xlrd
import json
import os
import datetime
import re
 
import crash_tools

source_file = os.path.join(os.path.dirname(__file__), 'input/data.xlsx')
output_json_file = os.path.join(os.path.dirname(__file__), 'output/data.json')
 
def open_file():
    wb = xlrd.open_workbook(source_file)
    return wb
 
def read_sheet(sh):
    column_names = []
    for i in range(sh.ncols):
        header = sh.cell(0, i).value.replace(" ", "_").lower()
        column_names.append(header)
 
    # list to store each row's data
    sheet_list = []
 
    # loop through rows
    for rownum in range(1, sh.nrows):
        # dict to store each column with key from header row
        row_dict = {
            "id": rownum
        }
 
        # loop through each column in row
        for colnum in range(sh.ncols):
            value = sh.cell(rownum, colnum).value
            row_dict[column_names[colnum]] = value
 
        sheet_list.append(row_dict)
 
    return sheet_list
 
def read_wb(wb):
    """
    Reads workbook obj, returning an dictionary where each key takes the name of each sheet, 
    and each value is a list of sheet values.
    """
    sheets_dict= {}
    for sheet_index in range(wb.nsheets):
        sh = wb.sheet_by_index(sheet_index)
        sh_name = str(sh.name)
        sheet_list = read_sheet(sh)
        sheets_dict[sh_name] = (sheet_list)
    return sheets_dict
 
 
def format_data():
    print "Opening file..."
    wb = open_file()
    print "Reading file..."
    wb_data = read_wb(wb)
    print "Formatting data..."
    formatted_data = crash_tools.find_county_data(wb_data["State Breakdown"], wb_data["County Breakdown"])
    with open (output_json_file, 'w') as output_file:
        json.dump(formatted_data, output_file)
    print "Complete!"
 
if __name__ == "__main__":
    format_data()
