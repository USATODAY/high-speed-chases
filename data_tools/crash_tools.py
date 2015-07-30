import us

def get_state_info(state_abbr):
    """
    use the us libary to get some more state info based on abbreviation
    """

def sort_county_data(all_counties_list):
    """
    Formats all_counties_list into dictionary keyed by state
    """
    # Create empty dictionary to hold each states data
    states_dict = {}
    
    # Loop through provided counties list
    for county_dict in all_counties_list:
        state = county_dict["state"]
        # Check to see if state exists in our states_dict yet
        if state in states_dict.keys():
            # If it exists, append county to state list
            states_dict[state].append(county_dict)
        else:
            # If it doesn't exist, create a new list with county as first item
            states_dict[state] = [county_dict]
    
    return states_dict

def find_top_10_for_state(all_counties_list, state_abbr):
    """
    Filters counties down to state then finds top 10
    """
    sorted_counties_dict = sort_county_data(all_counties_list)
    state_list = sorted_counties_dict[state_abbr]
    return find_top_10_counties(state_list)


def find_top_10_counties(counties_list):
    """
    Looks through list of all counties and finds the top 10 counties 
    """
    sorted_state_list = sorted(counties_list, key=lambda county: -county["total_dead"])
    top_10 = sorted_state_list[:5]
    return top_10

def find_county_data(states_list, counties_list):
    new_states_list = []
    for state_dict in states_list:
        if state_dict["state"] != "US TOTAL":
            top_10 = find_top_10_for_state(counties_list, state_dict["state"])
            state_dict["top_10"] = top_10
            if state_dict["state"] != "UNKNOWN":
                full_state = getattr(us.states, state_dict["state"]).name
                state_dict["full_state"] = full_state
            else:
                state_dict["full_state"] = "Unknown"

            new_states_list.append(state_dict)
        else:
            state_dict["top_10"] = find_top_10_counties(counties_list)
            state_dict["full_state"] = "US Total"
            new_states_list.append(state_dict)
    
    return new_states_list

