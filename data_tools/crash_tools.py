def sort_county_data(all_counties_list):
    """
    Formats all_counties_list into dictionary keyed by state
    """
    # Create empty dictionary to hold each states data
    states_dict = {}
    
    # Loop through provided counties list
    for county_dict in all_counties_list:
        state = county_dict["STATE"]
        # Check to see if state exists in our states_dict yet
        if state in states_dict.keys():
            # If it exists, append county to state list
            states_dict[state].append(county_dict)
        else:
            # If it doesn't exist, create a new list with county as first item
            states_dict[state] = [county_dict]
    
    return states_dict


def find_top_10_counties(all_counties_list, state_abbr):
    """
    Looks through list of all counties and finds the top 10 counties 
    for the provided state (in postal code abbreviation format)
    """
    sorted_counties_dict = sort_county_data(all_counties_list)
    state_list = sorted_counties_dict[state_abbr]
    sorted_state_list = sorted(state_list, key=lambda county: -county["TOTAL DEAD"])
    top_10 = sorted_state_list[:10]
    print top_10
    return top_10

def find_county_data(states_list, counties_list):
    new_states_list = []
    for state_dict in states_list:
        if state_dict["State"] != "US TOTAL":
            top_10 = find_top_10_counties(counties_list, state_dict["State"])
            state_dict["top_counties"] = top_10
            new_states_list.append(state_dict)
    
    return new_states_list

